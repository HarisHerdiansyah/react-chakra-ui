import { faker } from '@faker-js/faker';
import moment from 'moment';

export function generateRecords(numRecords) {
  const result = [];

  for (let i = 0; i < numRecords; i++) {
    result.push({
      id: faker.string.uuid(),
      bookTitle: faker.person.jobTitle(),
      writer: faker.person.fullName(),
      yearPublished: moment(faker.date.anytime()).year().toString(),
      isDone: i % 3 === 0 || i % 4 === 0
    });
  }

  return result;
}

