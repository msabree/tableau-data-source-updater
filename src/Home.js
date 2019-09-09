import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import debounce from 'lodash/debounce';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    marginBottom: 40,
  },
  card: {
    maxWidth: 345,
    marginRight: 20,
  },
  media: {
    height: 200,
    width: 200,
  },
}));

export default function SwitchListSecondary() {
    const UPDATE_CSV_DEBOUNCE = 5000;
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [productIndex, setProductIndex] = useState(0);
    const [updatesMap, setUpdatesMap] = useState({});

    useEffect(() => {
        fetch('https://tableau-data-source-updater.herokuapp.com/csv')
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            setData(res.data);
        });    
    }, []);
    
    const updateCsv = () => {
        fetch('https://tableau-data-source-updater.herokuapp.com/csv', {
            method: 'POST',
            body: updatesMap
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(res) {
            setData(res.data);
        });  
    }

    const getQuestionView = (objQuestion = {}) => {
        if(objQuestion.type === 'image'){
            return (
                <React.Fragment>
                    <ListItem className={classes.listItem}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={objQuestion.image}
                                title="Image"
                            />
                        </Card>
                        <ListItemText className='question' secondary={objQuestion.question} />
                        <ListItemSecondaryAction>
                            <FormControl>
                                <RadioGroup aria-label='Yes | No' name='questionRadio' className={classes.group} onChange={(event) => {
                                    updatesMap[objQuestion.matrixUpdateLocation] = {
                                        value: event.target.value,
                                    }
                                    setUpdatesMap(updatesMap)
                                    console.log(updatesMap)
                                }}>
                                    <FormControlLabel value='Yes' control={<Radio color='primary' />} label='Yes' />
                                    <FormControlLabel value='No' control={<Radio color='primary' />} label='No' />
                                </RadioGroup>
                            </FormControl>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider/>
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>
                <ListItem className={classes.listItem}>
                    <ListItemText className='question' secondary={objQuestion.question} primary={objQuestion.text} />
                    <ListItemSecondaryAction>
                        <FormControl>
                            <RadioGroup aria-label='Yes | No' name='questionRadio' className={classes.group} onChange={(event) => {
                                updatesMap[objQuestion.matrixUpdateLocation] = {
                                    value: event.target.value,
                                }
                                setUpdatesMap(updatesMap)
                                console.log(updatesMap)
                            }}>
                                <FormControlLabel value='Yes' control={<Radio color='primary' />} label='Yes' />
                                <FormControlLabel value='No' control={<Radio color='primary' />} label='No' />
                            </RadioGroup>
                        </FormControl>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
            </React.Fragment>
        )
    }

    return (
        <Container maxWidth="lg">
            <div>
                {get(data, [productIndex, 'product'], '')} {(data.length > 0) ? `(Product ${productIndex + 1} of ${data.length})` : ''}
            </div>
            <List subheader={<ListSubheader>{`Scrape Date: ${get(data, [productIndex, 'scrapeDate'], '')}`}</ListSubheader>} className={classes.root}>
            {
                get(data, [productIndex, 'questions'], []).map((question, index) => {
                    return (
                        <React.Fragment key={`${productIndex} - ${index}`}>
                            {
                                getQuestionView(question)
                            }
                        </React.Fragment>
                    )
                })
            }
            </List>
            <ButtonGroup size="small" aria-label="small outlined button group">
                <Button disabled={productIndex === 0} onClick={() => {
                    setProductIndex(productIndex - 1)
                 }}>Previous</Button>
                <Button disabled={productIndex === data.length - 1} onClick={() => {
                    setProductIndex(productIndex + 1)
                 }}>Next</Button>
            </ButtonGroup>
        </Container>
    );
}