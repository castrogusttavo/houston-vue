
<template>
  <Icon :iconName="'mail-open'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MailOpenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-open'
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
