
<template>
  <Icon :iconName="'graduate-male'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GraduateMaleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'graduate-male'
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
