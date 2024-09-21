
<template>
  <Icon :iconName="'call-end-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallEnd01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-end-01'
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
