
<template>
  <Icon :iconName="'maps-search'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsSearchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-search'
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
