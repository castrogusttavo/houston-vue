
<template>
  <Icon :iconName="'spoon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpoonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spoon'
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
