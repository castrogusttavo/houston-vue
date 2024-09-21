
<template>
  <Icon :iconName="'bitcoin-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bitcoin04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-04'
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
