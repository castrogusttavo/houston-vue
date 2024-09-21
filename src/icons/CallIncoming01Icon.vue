
<template>
  <Icon :iconName="'call-incoming-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallIncoming01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-incoming-01'
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
