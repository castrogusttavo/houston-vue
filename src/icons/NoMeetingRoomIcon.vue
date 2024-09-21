
<template>
  <Icon :iconName="'no-meeting-room'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoMeetingRoomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'no-meeting-room'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
