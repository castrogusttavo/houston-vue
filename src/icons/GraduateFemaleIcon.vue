
<template>
  <Icon :iconName="'graduate-female'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GraduateFemaleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'graduate-female'
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
