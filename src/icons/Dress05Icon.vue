
<template>
  <Icon :iconName="'dress-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dress05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dress-05'
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
