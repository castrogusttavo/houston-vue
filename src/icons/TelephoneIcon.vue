
<template>
  <Icon :iconName="'telephone'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TelephoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'telephone'
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
