
<template>
  <Icon :iconName="'nintendo'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NintendoIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nintendo'
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
