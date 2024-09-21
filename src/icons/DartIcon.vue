
<template>
  <Icon :iconName="'dart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dart'
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
