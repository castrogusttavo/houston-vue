
<template>
  <Icon :iconName="'passport'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PassportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'passport'
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
