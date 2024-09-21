
<template>
  <Icon :iconName="'traffic-incident'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TrafficIncidentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'traffic-incident'
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
