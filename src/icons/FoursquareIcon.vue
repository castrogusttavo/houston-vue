
<template>
  <Icon :iconName="'foursquare'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FoursquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'foursquare'
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
