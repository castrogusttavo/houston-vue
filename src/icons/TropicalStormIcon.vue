
<template>
  <Icon :iconName="'tropical-storm'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TropicalStormIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tropical-storm'
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
