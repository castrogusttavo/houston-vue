
<template>
  <Icon :iconName="'dress-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dress06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dress-06'
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
