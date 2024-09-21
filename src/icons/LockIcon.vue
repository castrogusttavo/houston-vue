
<template>
  <Icon :iconName="'lock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lock'
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
