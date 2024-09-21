
<template>
  <Icon :iconName="'help-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HelpCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'help-circle'
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
