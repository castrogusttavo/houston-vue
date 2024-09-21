
<template>
  <Icon :iconName="'prisoner'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PrisonerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'prisoner'
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
