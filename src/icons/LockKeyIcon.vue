
<template>
  <Icon :iconName="'lock-key'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockKeyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lock-key'
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
