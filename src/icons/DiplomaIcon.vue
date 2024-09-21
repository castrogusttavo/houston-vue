
<template>
  <Icon :iconName="'diploma'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiplomaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'diploma'
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
