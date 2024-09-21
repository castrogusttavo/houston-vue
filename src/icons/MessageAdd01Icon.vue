
<template>
  <Icon :iconName="'message-add-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MessageAdd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'message-add-01'
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
