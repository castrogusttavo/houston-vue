
<template>
  <Icon :iconName="'medium'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MediumIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medium'
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
