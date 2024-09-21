
<template>
  <Icon :iconName="'give-pill'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GivePillIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'give-pill'
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
