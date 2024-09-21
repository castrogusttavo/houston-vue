
<template>
  <Icon :iconName="'preference-vertical'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PreferenceVerticalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'preference-vertical'
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
