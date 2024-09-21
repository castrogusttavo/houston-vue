
<template>
  <Icon :iconName="'help-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HelpSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'help-square'
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
