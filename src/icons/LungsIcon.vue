
<template>
  <Icon :iconName="'lungs'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LungsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'lungs'
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
