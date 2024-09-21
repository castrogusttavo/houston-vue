
<template>
  <Icon :iconName="'hold-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Hold04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hold-04'
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
