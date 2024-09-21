
<template>
  <Icon :iconName="'radio'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RadioIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radio'
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
