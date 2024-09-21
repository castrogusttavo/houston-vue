
<template>
  <Icon :iconName="'wink'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WinkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wink'
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
