
<template>
  <Icon :iconName="'text-creation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextCreationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-creation'
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
