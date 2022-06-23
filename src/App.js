import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
import './App.css';
import user from './data/user.json';
import data from './data/data.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}
