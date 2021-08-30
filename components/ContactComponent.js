import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        title: 'Contact Information'
    } 

    render() {
        return (
            <ScrollView>
                <Card
                wrapperStyle={{margin: 20}}
                title="Contact Information">
                    <Text style={{marginBottom: 10}}>

                            1 Nucamp Wa{"\n"}
                            Seattle, WA 98001{"\n"}
                            U.S.A.{"\n"}{"\n"}

                            Phone: 1-206-555-1234{"\n"}
                            Email: campsites@nucamp.co

                    </Text>
                </Card>
            </ScrollView>
        )
    }
}

export default Contact;