import { gql } from "@apollo/client";

// Get schedules
export const GetUpcomingRooms = gql`
  query getUpcomingRooms($limit: Int = -1, $offset: Int = 0) {
    upcomingRooms(limit: $limit, offset: $offset) {
      id
      title
      subtitle
      description
      startTime
      interestedCount
      speakers {
        id
        username
        firstName
        lastName
        bio
        photoUrl
        verified
        admin
        twitterUsername
        isFollowing
        followerCount
        followingCount
        # teams {
        #   id
        #   league
        #   name
        #   location
        #   logoUrl
        # }
      }
    }
  }
`;

export const GetOrbits = gql`
  query getOrbits($limit: Int = -1, $query: String = "") {
    orbits(limit: $limit, query: $query) {
      results {
        id
        description
        name
        status
      }
    }
  }
`;
