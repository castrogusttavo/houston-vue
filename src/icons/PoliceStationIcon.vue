
<template>
  <Icon :iconName="'police-station'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoliceStationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'police-station'
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
