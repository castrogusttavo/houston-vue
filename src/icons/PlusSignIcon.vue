
<template>
  <Icon :iconName="'plus-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PlusSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plus-sign'
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
