
<template>
  <Icon :iconName="'graduation-scroll'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GraduationScrollIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'graduation-scroll'
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
