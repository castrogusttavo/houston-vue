
<template>
  <Icon :iconName="'tap-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tap07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tap-07'
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
