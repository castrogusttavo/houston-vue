
<template>
  <Icon :iconName="'cloud-slow-wind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudSlowWindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-slow-wind'
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
