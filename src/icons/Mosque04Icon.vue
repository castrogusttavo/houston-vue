
<template>
  <Icon :iconName="'mosque-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mosque04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mosque-04'
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
