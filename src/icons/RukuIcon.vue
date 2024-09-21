
<template>
  <Icon :iconName="'ruku'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RukuIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ruku'
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
