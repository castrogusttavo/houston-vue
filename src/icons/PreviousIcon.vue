
<template>
  <Icon :iconName="'previous'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PreviousIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'previous'
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
