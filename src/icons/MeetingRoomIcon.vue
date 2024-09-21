
<template>
  <Icon :iconName="'meeting-room'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MeetingRoomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'meeting-room'
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
