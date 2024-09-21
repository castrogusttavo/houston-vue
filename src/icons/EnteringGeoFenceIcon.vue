
<template>
  <Icon :iconName="'entering-geo-fence'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EnteringGeoFenceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'entering-geo-fence'
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
