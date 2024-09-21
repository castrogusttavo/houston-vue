
<template>
  <Icon :iconName="'microsoft'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MicrosoftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'microsoft'
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
