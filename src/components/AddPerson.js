import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';
import {MKColor} from 'react-native-material-kit';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton: {
    marginTop: 20,
  },
});

class AddPerson extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'add-user'} size={30} color={tintColor} />
    ),
  };

  onAddPress() {
    const {firstName, lastName, phone, email, company, project, notes} =
      this.props;
    this.props.createNewContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      project,
      notes,
    });
    this.props.navigation.navigate('People');
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text>Add a new contact</Text>
          <TextInput
            style={styles.fieldStyles}
            placeholder={'First name...'}
            tintColor={MKColor.Teal}
            value={this.props.firstName}
            onChangeText={value =>
              this.props.formUpdate({prop: 'firstName', value})
            }
          />
          <TextInput
            style={styles.fieldStyles}
            placeholder={'Last name...'}
            tintColor={MKColor.Teal}
            value={this.props.lastName}
            onChangeText={value =>
              this.props.formUpdate({prop: 'lastName', value})
            }
          />
          <TextInput
            style={styles.fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
            value={this.props.email}
            onChangeText={value =>
              this.props.formUpdate({prop: 'email', value})
            }
          />
          <TextInput
            style={styles.fieldStyles}
            placeholder={'Company...'}
            tintColor={MKColor.Teal}
            value={this.props.company}
            onChangeText={value =>
              this.props.formUpdate({prop: 'company', value})
            }
          />
          <TextInput
            style={styles.fieldStyles}
            placeholder={'Project...'}
            tintColor={MKColor.Teal}
            value={this.props.project}
            onChangeText={value =>
              this.props.formUpdate({prop: 'project', value})
            }
          />
          <TextInput
            style={styles.fieldStyles}
            placeholder={'Notes...'}
            tintColor={MKColor.Teal}
            value={this.props.notes}
            onChangeText={value =>
              this.props.formUpdate({prop: 'notes', value})
            }
          />
          <View style={styles.addButton}>
            <Button title="Submit" onPress={this.onAddPress.bind(this)} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const {firstName, lastName, phone, email, company, project, notes} = state;
  return {firstName, lastName, phone, email, company, project, notes};
};

export default connect(mapStateToProps, actions)(AddPerson);
