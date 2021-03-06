import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import IconButton from 'material-ui/lib/icon-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Toggle from 'material-ui/lib/toggle';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//STYLES
const styles = {
    block: {
        maxWidth: 250
    },
    toggle: {
        marginBottom: 16
    },
    toggleContainer: {
        width: '30%',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'bottom'
    },
    inlineDisplay: {display: 'inline-block'},
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    settingCardContainer: {
        marginTop: '20px'
    },
    settingCard: {
        width: '40%',
        margin: '10px',
        display: 'inline-block'
    },
    userImage: {
        width: '20%',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'bottom',
        paddingTop: '30px',
        paddingLeft: '30px'
    },
    avatar: {
        width: '50px',
        height: '50px'
    },
    cardUserName: {
        width: '30%',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'bottom'
    },
    userInputText: {
        width: '45%'
    },
    toolbarTitle: {
        color: 'white'
    },
    serviceCard: {
        width: '30%',
        height: '300px',
        margin: '10px',
        display: 'inline-block'
    },
    serviceImage: {
        width: '100%',
        height: '100%'
    }
};

var allUsers = [];
var UserList = React.createClass({
    getInitialState: function () {
        return {
            list: []
        };
    },
    addUser: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                allUsers.push(data);
                this.setState({list: allUsers});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function () {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                allUsers.push(data);
                this.setState({list: allUsers});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function () {
        return <div>
            <AppBar
                title="Settings"
                iconElementLeft={<IconButton></IconButton>}
            />
            <Card style={styles.settingCardContainer}>
                <Toolbar>
                    <ToolbarTitle text="Current Users"/>
                </Toolbar>
                <CardText>
                    <div>
                        {
                            this.state.list.map(function (usr) {
                                return <div style={styles.settingCard}>
                                    <Card style={{height: '150px' }}>
                                        <div
                                            style={styles.userImage}>
                                            {<Avatar style={styles.avatar}
                                                     src={usr.results[0].user.picture.medium}/>}
                                        </div>
                                        <div
                                            style={styles.cardUserName}>
                                            <h3 style={{textTransform: 'uppercase'}}>{usr.results[0].user.name.first}</h3>
                                        </div>

                                        <div
                                            style={styles.toggleContainer}>
                                            <Toggle
                                                label="Disabled"
                                                labelPosition="right"
                                                style={styles.toggle}/>
                                        </div>
                                    </Card>

                                </div>
                            })
                        }
                    </div>
                </CardText>
            </Card>

            <Card>
                <Toolbar>
                    <ToolbarTitle text="Add User"/>
                </Toolbar>
                <CardText>
                    <TextField style={styles.userInputText} floatingLabelText="Title"/>
                    <TextField style={styles.userInputText} floatingLabelText="Email"/>
                    <TextField style={styles.userInputText} floatingLabelText="First Name"/>
                    <TextField style={styles.userInputText} floatingLabelText="Last Name"/>
                    <FloatingActionButton onClick={this.addUser} secondary={true}>
                        <div>+</div>
                    </FloatingActionButton>

                </CardText>
            </Card>
        </div>
    }
});


//SERVICES
var Services = React.createClass({
    render: function () {
        return <div>
            <AppBar
                title="Services"
                iconElementLeft={<IconButton></IconButton>}/>
            <Tabs>
                <Tab label="SERVICES OVERVIEW">
                    <div>
                        <Card style={styles.serviceCard}>
                            <Toolbar style={{backgroundColor: 'rgb(198,40,40)'}}>
                                <ToolbarTitle style={styles.toolbarTitle} text="Trade Services"/>
                            </Toolbar>
                            <img style={styles.serviceImage}
                                 src="http://docs.cacti.net/_media/template:graph:cisco:cisco_cpu_usage.png"></img>
                        </Card>
                        <Card style={styles.serviceCard}>
                            <Toolbar style={{backgroundColor: 'rgb(13,71,161)'}}>
                                <ToolbarTitle style={styles.toolbarTitle} text="Auth Services"/>
                            </Toolbar>
                            <img style={styles.serviceImage}
                                 src="http://docs.cacti.net/_media/template:graph:cisco:cisco_cpu_usage.png"></img>
                        </Card>
                        <Card style={styles.serviceCard}>
                            <Toolbar style={{backgroundColor: 'rgb(176,190,197)'}}>
                                <ToolbarTitle style={styles.toolbarTitle} text="User Services"/>
                            </Toolbar>
                            <img style={styles.serviceImage}
                                 src="http://docs.cacti.net/_media/template:graph:cisco:cisco_cpu_usage.png"></img>
                        </Card>
                    </div>
                </Tab>
                <Tab label="INSTANCES OVERVIEW">
                    <div>
                        <Card>
                            <Toolbar style={{backgroundColor: 'rgb(13,71,161)'}}>
                                <ToolbarTitle style={styles.toolbarTitle} text="WCX1234565"/>
                            </Toolbar>
                            <CardText>
                                <h3>Services Running</h3>
                                <h4> Trade Service</h4>
                                <h4> Auth Service</h4>
                            </CardText>
                        </Card>
                    </div>
                </Tab>
            </Tabs>
        </div>
    }
});


//ALERTS
var alerts = [
    {
        type: 'error',
        ts: '2015-04-17 17:00:01',
        description: 'Trade Services connection lost.'
    },
    {
        type: 'warning',
        ts: '2015-04-17 16:52:23',
        description: 'Auth Services response timeout, retrying.'
    },
    {type: 'error', ts: '2015-04-17 16:00:01', description: 'Trade Services connection lost.'},
    {
        type: 'warning',
        ts: '2015-04-17 15:52:23',
        description: 'Auth Services response timeout, retrying.'
    },
    {
        type: 'warning',
        ts: '2015-04-17 15:42:23',
        description: 'Auth1 Services response timeout, retrying.'
    },
    {type: 'error', ts: '2015-04-17 17:00:01', description: 'Trade Services connection lost.'},
    {
        type: 'warning',
        ts: '2015-04-17 16:52:23',
        description: 'Auth Services response timeout, retrying.'
    },
    {type: 'error', ts: '2015-04-17 16:00:01', description: 'Trade Services connection lost.'},
    {
        type: 'warning',
        ts: '2015-04-17 15:52:23',
        description: 'Auth Services response timeout, retrying.'
    },
    {
        type: 'warning',
        ts: '2015-04-17 15:42:23',
        description: 'Auth Services response timeout, retrying.'
    },
    {
        type: 'warning',
        ts: '2015-04-17 15:42:23',
        description: 'Auth Services response timeout, retrying.'
    },
    {
        type: 'warning',
        ts: '2015-04-17 15:42:23',
        description: 'Auth Services response timeout, retrying.'
    }];

var Alerts = React.createClass({
    filterList: function (event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.description.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    },
    getInitialState: function () {
        var items = alerts;
        return {
            initialItems: items,
            items: items
        }
    },

    render: function () {
        return (
            <div>
                <AppBar
                    title="Alerts"
                    iconElementLeft={<IconButton></IconButton>}/>
                <Card>
                    <Toolbar>
                        <ToolbarTitle text="System Alerts"/>
                    </Toolbar>
                    <TextField onChange={this.filterList} style={{width: '30%'}} floatingLabelText="Filter"/>
                    <List>
                        <AlertList items={this.state.items}/>
                    </List>
                </Card>

            </div>
        );
    }
});

var AlertList = React.createClass({
    render: function () {
        return (
            <div>
                {
                    this.props.items.map(function (item) {
                        return <ListItem disabled={true}>
                            <img
                                src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-9/24/Warning-icon.png"> </img>
                            <b>{item.ts} </b> {item.description}
                        </ListItem>
                    })
                }
            </div>
        )
    }
});


//LEFT NAV
var Nav = React.createClass({
    openSettings: function () {
        ReactDOM.render(<UserList url="https://randomuser.me/api/"/>, document.getElementById("app"));
    },
    openServices: function () {
        ReactDOM.render(<Services/>, document.getElementById('app'));
    },
    openAlerts: function () {
        ReactDOM.render(<Alerts/>, document.getElementById("app"));
    },
    render: function () {
        return <div>
            <LeftNav open={true} docked={true}>
                <AppBar title="Dashboard"/>
                <MenuItem onClick={this.openServices}>SERVICES</MenuItem>
                <MenuItem onClick={this.openSettings}>SETTINGS</MenuItem>
                <MenuItem onClick={this.openAlerts}>ALERTS</MenuItem>
            </LeftNav>
        </div>
    }
});

ReactDOM.render(<Services/>, document.getElementById("app"));
ReactDOM.render(<Nav/>, document.getElementById("leftNav"));

