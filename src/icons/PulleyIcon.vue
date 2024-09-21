
<template>
  <Icon :iconName="'pulley'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PulleyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pulley'
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
