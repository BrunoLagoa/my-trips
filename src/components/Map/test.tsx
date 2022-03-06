import { render, screen } from '@testing-library/react';
import Map from '.';

describe('<Map />', () => {
  it('Should render without any marker', () => {
    render(<Map />);

    screen.logTestingPlaygroundURL();
  });

  it('Should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Test Place',
      slug: 'test-place',
      location: {
        latitude: -23.564,
        longitude: -46.654
      }
    };
    render(<Map places={[place]} />);

    expect(screen.getByTitle(/Test Place/i)).toBeInTheDocument();
  });
});
